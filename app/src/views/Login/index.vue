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
                    <input placeholder="Username or email" class="userName" />
                    <input placeholder="Password" type="password" class="passWord" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const radio1 = ref('1')
const formLabelAlign = reactive({
    userName: '',
    passWord: '',
})
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
            width: 793px;
            height: 800px;
            background-color: #fff;

            .tit {
                margin-top: 40px;
                font-family: 'Times New Roman', Times, serif;
                font-size: 40px;
            }

            .txt {
                font-size: 22px;
                color: #6b7c81;
                margin-top: 30px;
            }

            .form {

                .userName,
                .passWord {
                    display: block;
                    margin: 20px 0;
                    width: 500px;
                    height: 72px;
                    border: none;
                    border-bottom: 1px solid #D9D9D9;
                    outline: none;

                    &::placeholder {
                        font-size: 18px;
                        color: #6b7c81;
                        padding: 0 0 0 12px;
                    }
                }
            }
        }
    }
}
</style>