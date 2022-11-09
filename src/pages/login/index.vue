<template>
  <div class='loginCon'>

    <!-- 登录框 -->
    <div class="login">
      <!-- 左侧动图区域 -->
      <div class="left">
        <img src="@/assets/img/login.gif" style="height:100%;width:100%">
      </div>
      <!-- 右侧列表区域 -->
      <div class="right">
        <h1>量子智能登录</h1>
        <div class="inputs">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="confirm">
          <span>登</span>
          <span>录</span>
        </div>
      </div>
    </div>

    <!-- 背景墙 -->
    <div class="background">

    </div>
  </div>
</template>

<script>
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang='less' scoped >
.loginCon {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  //border: 1px solid transparent;
  position: relative;
  // background: url('@/assets/img/loginBackground.jpg') no-repeat;
  // background-size: cover;
}

.login {
  width: 62%;
  height: 50%;
  //border: 1px solid red;
  position: absolute;
  z-index: 9;
  left: 18%;
  top: 20%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 6px 1px rgb(104, 102, 102);
  background-color: #ffffff;
  display: flex;

  .left {
    height: 100%;
    width: 50%;
    display: flex;
  }

  .right {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    //background-color: aqua;
    h1 {
      color: #05A2EC;
    }

    .inputs {
      width: 100%;
      height: 60%;
      border: 1px solid red;

      .user {
        height: 100px;
      }

    }

    .confirm {
      width: 60%;
      height: 10%;
      margin-top: 6%;
      border-radius: 26px;
      border: 1px solid rgb(126, 121, 121);
      box-shadow: 0 0 2px 1px rgb(197, 194, 194);
      display: flex;
      justify-content: space-around;
      align-items: center;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        margin-top: 5%;
      }

      span {
        text-align: center;
        font-size: 26px;
        font-weight: 100;
      }
    }

  }
}

.background {
  width: 200%;
  height: 60%;
  background-color: #05A2EC;
  // background: url('@/assets/img/loginBackground.jpg') no-repeat;
  //background-size: cover;
  transform: rotate(30deg);
}
</style>