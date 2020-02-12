<template>
  <div>
    <md-button class="md-icon-button md-primary" md-size="large" v-on:click="toggleAddWorker">
      <md-icon>person_add</md-icon>
    </md-button>

    <form novalidate class="md-layout" @submit.prevent="validateWorker" v-if="showAddWorker">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add Worker</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="form.firstName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="form.lastName"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input
                  type="number"
                  id="age"
                  name="age"
                  autocomplete="age"
                  v-model="form.age"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.age.between"
                >Age must be in range (10, 100)</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('wage')">
                <label for="age">Wage</label>
                <md-input
                  type="number"
                  id="wage"
                  name="wage"
                  autocomplete="wage"
                  v-model="form.wage"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.wage.required">The wage is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.wage.between"
                >wage must be in range (1000, 10000)</span>
                <span class="md-error" v-else-if="!$v.form.wage.maxlength">Invalid wage</span>
              </md-field>
            </div>
          </div>

          <!--
           <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input
                  type="number"
                  id="age"
                  name="age"
                  autocomplete="age"
                  v-model="form.age"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
                <span
                  class="md-error"
                  v-else-if="!$v.form.age.between"
                >Age must be in range (10, 100)</span>
              </md-field>
          -->
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create worker</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="workerSaved">The worker {{ lastWorker }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";
import uuid from "uuid";

export default {
  name: "FormValidation",
  mixins: [validationMixin],
  data: () => ({
    showAddWorker: false,
    form: {
      firstName: null,
      lastName: null,
      age: null,
      wage: null
    },
    workerSaved: false,
    sending: false,
    lastWorker: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3),
        between: between(10, 100)
      },
      wage: {
        required,
        between: between(1000, 10000)
      }
    }
  },
  methods: {
    toggleAddWorker() {
      this.showAddWorker = !this.showAddWorker;
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.age = null;
      this.form.wage = null;
    },
    saveWorker() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        // this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.lastWorker = {
          id: uuid.v4(),
          fname: this.form.firstName,
          lname: this.form.lastName,
          age: this.form.age,
          wage: this.form.wage
        };
        this.$emit("add-worker", this.lastWorker);
        this.workerSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateWorker() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveWorker();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>