<template>
  <el-container class="love-page">
    <el-header>
      <h1>💖 网络姻缘一线牵，带走冠华就今天 💖</h1>
    </el-header>

    <el-main>
      <el-card class="profile-card" shadow="hover">
        <div class="profile">
          <img src="@/assets/imgs/mgh.jpg" alt="冠华照片" class="avatar" />
          <div class="info">
            <h2>冠华</h2>
            <p>年龄：22 岁</p>
            <p>职业：人民企业家</p>
            <p>兴趣：音乐、电影、美食、旅行</p>
            <p>座右铭：<i>“不做无法实现的梦。”</i></p>
          </div>
        </div>
      </el-card>

      <el-card class="form-card" shadow="never">
        <h3>💌 想了解我？请留下你的信息</h3>
        <el-form :model="form" label-position="top" class="contact-form">
          <el-form-item label="你的名字">
            <el-input v-model="form.name" placeholder="请输入你的名字"></el-input>
          </el-form-item>

          <el-form-item label="联系方式">
            <el-input v-model="form.contact" placeholder="微信号 / 电话 / 邮箱"></el-input>
          </el-form-item>

          <el-form-item label="留言">
            <el-input
              v-model="form.message"
              type="textarea"
              :rows="3"
              placeholder="简单介绍一下自己吧～"
            ></el-input>
          </el-form-item>

          <el-button type="primary" @click="handleSubmit">发送红线 💗</el-button>
        </el-form>
      </el-card>

      <p class="footer">—— by 群鸟 ——</p>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({
  name: '',
  contact: '',
  message: '',
})

const handleSubmit = () => {
  if (!form.value.name || !form.value.contact) {
    ElMessage.warning('请填写完整信息哦～')
    return
  }
  ElMessage.success('红线已发出，静待佳阴💞')
  console.log('提交信息：', form.value)
}
</script>

<style scoped>
.love-page {
  background: linear-gradient(180deg, #ffe6f0 0%, #fff 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #ff4d88;
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: bold;
}

.profile-card {
  background-color: #fff0f6;
  border: 1px solid #ffcce0;
  border-radius: 16px;
  max-width: 500px;
  margin: 20px auto;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #ff99cc;
  object-fit: cover;
}

.info {
  text-align: left;
  color: #555;
}

.form-card {
  background-color: #fff;
  border-radius: 16px;
  max-width: 480px;
  margin: 20px auto;
  padding: 20px;
}

.contact-form {
  margin-top: 10px;
}

.el-button--primary {
  background-color: #ff66a3;
  border-color: #ff66a3;
}

.el-button--primary:hover {
  background-color: #ff4d88;
  border-color: #ff4d88;
}

.footer {
  color: #999;
  margin-top: 20px;
}
</style>
