export const validate = (passwordSent: string) => {
  // var errors: { email: string; password: string } = { email: "", password: "" };
  var errors = "";

  // const emailRegex =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (!emailRegex) {
  //   errors.email = "Email address is invalid";
  // }

  const pwRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      passwordSent
    );
  if (!pwRegex) {
    errors =
      "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  }

  return errors;
};
