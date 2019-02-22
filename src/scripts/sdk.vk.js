export default class {
    constructor(apiID, params, version = 5.92) {
        this.apiID = apiID;
        this.params = params;
        this.version = version;
    }

    login() {
        if (this.inited != this.apiID) {
            VK.init({
                apiId: this.apiID
            });

            this.inited = this.apiID;
            console.log(this.apiID)
        }

        return new Promise((resolve, reject) => {
            VK.Auth.getLoginStatus((response) => {
                if (response.status === 'connected') {
                    console.log(response.status)
                    resolve(response.status);
                } else {
                    reject(new Error('Не авторизован'));
                }
            });
        });
    }

    auth() {
        return this.login().catch(() => {
            return new Promise((resolve, reject) => {
                VK.Auth.login((response) => {
                    if (response.session) {
                        console.log(response.session)
                        resolve()
                    } else {
                        reject(new Error('Авторизация провалена'));
                    }
                })
            })
        });
    }

    callApi(method, params) {
        return new Promise((resolve, reject) => {
            params = params || {};
            params.v = this.version;

            VK.Api.call(method, params, (response) => {
                if (response.error) {
                    reject(new Error(response.error.msg));
                } else {
                    resolve(response.response);
                }
            })
        });
    }

    remoke(cb) {
        VK.Auth.revokeGrants(function (stat) {
            if (stat.session === null) {
                cb()
            }
        });
    }
}