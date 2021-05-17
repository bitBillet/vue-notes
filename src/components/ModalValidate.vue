<template>
    <Modal @close="$emit('close')"
           title="Second modal with form">
        <template v-slot:body>
            <form @submit.prevent="onSubmit">
              <div class="form-item" :class="{ errorInput: $v.name.$error }">
                <label>Name:</label>
                <p class="errorText" v-if="!$v.name.required">Введи имя или сходи нахуй</p>
                <p class="errorText" v-if="!$v.name.minLength">Введи имя нормально не меньше {{ $v.name.$params.minLength.min }}</p>
                <input type="text" v-model="name"
                       :class="{error: $v.name.$error}"
                       @change="$v.name.$touch()"
                >
              </div>
              <div class="form-item" :class="{ errorInput: $v.email.$error }">
                <label>Email:</label>
                <p class="errorText" v-if="!$v.email.required">Введи почту или сходи нахуй</p>
                <p class="errorText" v-if="!$v.email.email">Введи почту нормально</p>
                <input type="email" v-model="email"
                       :class="{error: $v.email.$error}"
                       @change="$v.email.$touch()"
                >
              </div>
              <button type="submit">Отправить</button>
            </form>
        </template>
    </Modal>
</template>

<script>
    import Modal from "./Modal";
    import { required, minLength, email } from 'vuelidate/lib/validators'

    export default {
        name: "ModalValidate",
        components: {
            Modal
        },
        data() {
          return {
            email: '',
            name: ''
          }
        },
        validations: {
          name: {
            required,
            minLength: minLength(4)
          },
          email: {
            required,
            email
          }
        },
      methods: {
        onSubmit() {
          this.$v.$touch()
          if (!this.$v.$invalid) {
            console.log({
              name: this.name,
              email: this.email
            })
            this.name = ''
            this.email = ''
            this.$v.$reset()
            this.$emit('close')
          }
        }
      }
    }
</script>

<style scoped>
  .form-item .errorText {
    margin-bottom: 8px;
    display: none;
    font-size: 13px;
    color: #D41212;
  }
  .errorInput .errorText {
    display: block;
  }
  input.error {
    color: #D41212;
  }
</style>