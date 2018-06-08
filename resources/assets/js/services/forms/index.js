import "./forms";
import "./errors";
import http from "./http";

// Add methods to App Object for HTTP Request
_.extend(App, http);

// All Fields Declared Here When Initiated Will Be Reactive
App.forms = {
  passwordResetForm: {
    email: "",
    password: "",
    password_confirmation: "",
    token: ""
  },
  resetForm: {
    username: ""
  },
  logoutForm: {
    submit: true
  },
  loginForm: {
    username: "",
    password: "",
    remember: false
  },
  registerForm: {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
  },
  toggleForm: {
    toggle: false
  },
  accountForm: {
    email: null,
    username: null,
    old_password: null,
    password: null,
    password_confirmation: null
  },
  profileForm: {
    company_name: null,
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    address_1: null,
    address_2: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    notes:null,
  },
  usersForm: {},
  rolesForm: {
    roles: []
  },
  permissionsForm: {
    permissions: []
  },
  contactForm: {
    name: "",
    email: "",
    subject: "",
    message: ""
  }
  // Add Other Form Object Here
};
