<template>
    <div class="loginContainer">
        <div class="inner">
            <div class="leftpg"></div>
            <div class="rg">
                <div class="tit">
                    Loverbirds
                </div>
                <div class="txt">
                    Welcome to Loverbirds
                </div>
                <div class="form">
                    <input placeholder="Username or email" v-model="formLabelAlign.userName" class="userName" />
                    <input placeholder="Password" type="password" class="passWord" v-model="formLabelAlign.passWord" />
                </div>
                <div class="forget_pas">forget password?</div>
                <div class="singin" @click="signIn">Sign in</div>
                <div class="or">or</div>
                <div class="signgoogle">
                    <div class="icon"></div>
                    SIGN IN WITH GOOGLE
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
localStorage.clear()
const radio1 = ref('1')
const router = useRouter()
const formLabelAlign = reactive({
    userName: '',
    passWord: '',
})
const signIn = () => {
    localStorage.setItem('userInfo', JSON.stringify({
        userName: formLabelAlign.userName,
        passWord: formLabelAlign.passWord
    }))
    router.push('/home')
}

</script>

<style scoped lang="less">
.loginContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b3e4f;

    .inner {
        max-width: 1360px;
        max-height: 800px;
        display: flex;
        align-items: center;

        .leftpg {
            width: 566px;
            height: 800px;
            background: url(../../assets/picture/Login/login.png);
            background-size: 100% 100%;
        }

        .rg {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 800px;
            background-color: #fff;
            padding: 0 71px;

            .tit {
                margin-top: 80px;
                font-family: 'Times New Roman', Times, serif;
                font-size: 40px;
            }

            .txt {
                font-size: 22px;
                color: #6b7c81;
                margin-top: 40px;
            }

            .form {
                margin-top: 20px;

                .userName,
                .passWord {
                    display: block;
                    margin: 25px 0px 20px 0px;
                    width: 400px;
                    height: 72px;
                    border: none;
                    border-bottom: 1px solid #D9D9D9;
                    outline: none;
                    font-size: 22px;
                    padding-left: 22px;
                    color: #555555;

                    &::placeholder {
                        font-size: 18px;
                        color: #999999;
                    }
                }
            }

            .forget_pas {
                width: 100%;
                margin-top: 20px;
                font-size: 14px;
                color: #808080;
                display: flex;
                justify-content: flex-end;
                font-family: 'Times New Roman', Times, serif;
                cursor: pointer;
            }

            .singin {
                margin-top: 42px;
                width: 149px;
                line-height: 47px;
                color: #fff;
                background-color: black;
                border-radius: 24px;
                text-align: center;
                cursor: pointer;
            }

            .or {
                margin: 35px 0;
                color: #849296;
                line-height: 21px;

                &::before,
                &::after {
                    content: '';
                    display: inline-block;
                    width: 100px;
                    height: 1px;
                    margin: 0 10px 4px 10px;
                    background-color: #dcdcdc;
                }
            }

            .signgoogle {
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 30px;
                font-size: 13px;
                color: #000000;
                cursor: pointer;

                .icon {
                    margin-right: 12px;
                    width: 24px;
                    height: 24px;
                    background: url(../../assets/picture/Login/google.png);
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>