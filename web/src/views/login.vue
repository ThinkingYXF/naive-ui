<script setup lang="ts">
import { ref } from "vue";
import { Validators, useFormGroup } from "@idux/cdk/forms";
const { required } = Validators;
const formGroup = useFormGroup({
  username: ["", required],
  password: ["", required],
});
const login = () => {
  if (formGroup.valid.value) {
    const { username, password } = formGroup.getValue();
  } else {
    formGroup.markAsDirty();
  }
};
const passwordVisible = ref(false);
const showLoginOrReg = ref(1);
</script>
<template>
  <div class="bg">
    <div class="login" v-if="showLoginOrReg == 1">
      <IxForm class="demo-form" :control="formGroup" size="lg">
        <IxFormItem label="账号" message="请输入账号">
          <IxInput
            control="username"
            prefix="user"
          ></IxInput>
        </IxFormItem>
        <IxFormItem label="密码" message="请输入密码">
          <IxInput
            control="password"
            prefix="lock"
            :type="passwordVisible ? 'text' : 'password'"
          >
            <template #suffix>
              <IxIcon
                :name="passwordVisible ? 'eye-invisible' : 'eye'"
                @click="passwordVisible = !passwordVisible"
              >
              </IxIcon>
            </template>
          </IxInput>
        </IxFormItem>
        <IxFormItem style="text-align: center">
          <IxSpace align="center" :size="30">
            <IxButton mode="primary" type="submit" @click="login"
              >登录</IxButton
            >
            <IxButton mode="primary" danger type="submit" @click="login"
              >注册</IxButton
            >
          </IxSpace>
        </IxFormItem>
      </IxForm>
    </div>
    <div class="register" v-if="showLoginOrReg == 2"></div>
  </div>
</template>
<style lang="less" scoped>
//
</style>