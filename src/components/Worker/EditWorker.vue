<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateWorker" v-if="showEditWorker">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Edit Worker</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('fname')">
                <label for="first-name">First Name</label>
                <md-input
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  v-model="worker.fname"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.worker.fname.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.worker.fname.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lname')">
                <label for="last-name">Last Name</label>
                <md-input
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  v-model="worker.lname"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.worker.lname.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.worker.lname.minlength">Invalid last name</span>
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
                  v-model="worker.age"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.worker.age.required">The age is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.worker.age.between"
                >Age must be in range (10, 100)</span>
                <span class="md-error" v-else-if="!$v.worker.age.maxlength">Invalid age</span>
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
                  v-model="worker.wage"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.worker.wage.required">The wage is required</span>
                <span
                  class="md-error"
                  v-else-if="!$v.worker.wage.between"
                >wage must be in range (1000, 10000)</span>
                <span class="md-error" v-else-if="!$v.worker.wage.maxlength">Invalid wage</span>
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
          <md-button type="submit" class="md-primary" :disabled="sending">Update worker</md-button>
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
  props: ["worker", "showEditWorker"],
  data: () => ({
    // form: {
    //   firstName: this.worker ? this.worker.fname : null,
    //   lastName: null,
    //   age: null,
    //   wage: null
    // },
    workerSaved: false,
    sending: false,
    lastWorker: null
  }),
  validations: {
    worker: {
      fname: {
        required,
        minLength: minLength(3)
      },
      lname: {
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
    getValidationClass(fieldName) {
      const field = this.$v.worker[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.worker.fname = null;
      this.worker.lname = null;
      this.worker.age = null;
      this.worker.wage = null;
    },
    saveWorker() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        // this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.lastWorker = {
          id: this.worker.id,
          fname: this.worker.fname,
          lname: this.worker.lname,
          age: this.worker.age,
          wage: this.worker.wage
        };
        this.$emit("edit-worker", this.lastWorker);
        this.workerSaved = true;
        this.sending = false;
        // this.clearForm();
        this.$emit("close-edit-worker");
      }, 1500);
    },
    validateWorker() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveWorker();
      }
    }
  }
  // updated() {
  //   if (this.worker) {
  //     console.log(this.worker);
  //     this.form.firstName = this.worker.fname;
  //     this.form.lastName = this.worker.lname;
  //     this.form.age = this.worker.age;
  //     this.form.wage = this.worker.wage;
  //   }
  // }
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