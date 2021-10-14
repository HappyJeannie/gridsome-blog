<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">Say hi!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div><label for="name" class="label">Your name</label><input type="text" name="name" v-model="formData.name"/></div>
          <div><label for="email" class="label">Your email</label><input type="email" name="email" v-model="formData.email" /></div>
        </div>
        <div class="message"><label for="message" class="label">Message</label><textarea name="message" v-model="formData.content"></textarea></div>
        <button class="button" @click="submitHandler">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
const Axios =require('axios');
import Qs from 'qs'
export default {
  metaInfo: {
    title: 'Contact'
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        content: ''
      }
    }
  },
  methods: {
    async submitHandler(event) {
      event.preventDefault();
      const { name='123', email='11@qq.com', content='123' } = this.formData;
      const { data } = await Axios.post('http://localhost:1337/contacts', Qs.stringify({name,email,content}))
      if(data.id) {
        alert('发送成功');
        this.formData.name = '';
        this.formData.email = '';
        this.formData.content = '';
      }
    }
  }
}
</script>
<style scoped>
p {
    line-height: 1.5;
    font-size: 1.15rem;
}
.contact-header {
    padding: 2rem 0 4rem;
}
.contact-title {
    font-size: 4rem;
    margin: 0 0 4rem;
    padding: 0;
}
.sender-info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}
.sender-info>div {
    flex: 1;
    margin-right: 4rem;
}
.label {
    display: block;
    font-weight: 700;
    margin-bottom: .5rem;
}
input, textarea {
    background: transparent;
    border: 1px solid #f3f3f3;
    outline: none;
    border-radius: .3rem;
    padding: .8rem 1rem;
    color: inherit;
    font-size: 1rem;
    width: 100%;
}
.button {
    color: #fff;
    background: #000;
    outline: none;
    border: 0;
    font-size: .8rem;
    padding: .8rem 1.6rem;
    border-radius: .3rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: opacity .25s ease;
    font-size: 500;
    letter-spacing: .035em;
}
</style>
