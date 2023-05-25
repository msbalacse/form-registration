import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "./Form.css";
import Card from "./Card";

const Form = () => {
  const [userData, setUserData] = useState({});
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const submit = (data) => {
    alert(JSON.stringify(data, null, 2));
    setUserData(data);
    setShow(!show);
  };

  return (
    <div className="form__wrapper">
      {/* label
      input
      error */}
      <form onSubmit={handleSubmit(submit)}>
        <div className="input__wrapper">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name && (
            <span className="text-sm italic text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="input__wrapper">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            {...register("username", { required: true, maxLength: 6 })}
          />
          {errors.username && (
            <span className="text-sm italic text-red-600">
              This field is required and max-length 6 digit.
            </span>
          )}
        </div>
        <div className="input__wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && (
            <span className="text-sm italic text-red-600">Invalid Email.</span>
          )}
        </div>
        <div className="input__wrapper">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 16,
              pattern: "^[a-zA-Z-0-9",
            })}
          />
          {errors.password && (
            <span className="text-sm italic text-red-600">
              Password length should be 8 characters
            </span>
          )}
        </div>
        <div className="input__wrapper">
          <label htmlFor="Age">Age</label>
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 18,
              max: 99,
            })}
          />
          {errors.age && (
            <span className="text-sm italic text-red-600">
              Age should be between 18 to 99.
            </span>
          )}
        </div>
        <div className="input__wrapper">
          <label htmlFor="Gender">Gender</label>
          <select {...register("gender", { required: true })}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="others">others</option>
          </select>
          {errors.gender && (
            <span className="text-sm italic text-red-600">
              Gender should be between 18 to 99.
            </span>
          )}
        </div>

        {/* react phone number package css  */}

        <div className="input__wrapper">
          <label htmlFor="phone-input">Phone Number</label>
          <Controller
            name="phone_input"
            control={control}
            rules={{
              validate: (value) => isValidPhoneNumber(value),
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                value={value}
                onChange={onChange}
                defaultCountry="IN"
                id="phone-input"
              />
            )}
          />
          {errors.phone_input && (
            <span className="text-sm italic text-red-600">Invalid Phone</span>
          )}
        </div>

        {/* react phone number package css  */}

        <div className="input__wrapper">
          <label htmlFor="Skills">Skills</label>
          <div className="check__box">
            <input
              type="checkbox"
              name="HTML"
              {...register("Skill_html", { required: true })}
            />
            <label htmlFor="HTML">HTML</label>
          </div>
          <div className="check__box">
            <input type="checkbox" name="CSS" {...register("Skill: css")} />
            <label htmlFor="HTML">CSS</label>
          </div>
          <div className="check__box">
            <input
              type="checkbox"
              name="JavaScript"
              {...register("Skill: javascript")}
            />
            <label htmlFor="HTML">JavaScript</label>
          </div>
          {errors.Skill_html && (
            <span className="text-sm italic text-red-600">
              Choose Atleast one skill
            </span>
          )}
        </div>

        <div className="input__wrapper">
          <label htmlFor="feedback">Feedback</label>
          <textarea {...register("feedback")}></textarea>
        </div>
        <div className="input__wrapper">
          <label>Roles</label>
          <div className="radio">
            <input {...register("role")} type="radio" value="Developer" />
            <label htmlFor="roles"> Developer</label>

            <input {...register("role")} type="radio" value="Designer" />
            <label htmlFor="roles"> Designer</label>

            <input {...register("role")} type="radio" value="Others" />
            <label htmlFor="roles"> Others</label>
          </div>
        </div>

        <div className="terms">
          <input type="checkbox" {...register("terms", { required: true })} />
          <p>I agree terms and condition.</p>
          {errors.terms && (
            <span className="text-sm italic text-red-600">
              Agree the condition
            </span>
          )}
        </div>

        <div className="input__wrapper">
          <input className="btn" type="submit" />
        </div>
      </form>
      {show ? <Card data={userData} /> : null}
    </div>
  );
};

export default Form;

// Name     ""
// Password ""
// Age    ""
// Gender ""
// Email  ""
// Phone  ""
// Rating --
// Skills ""
// Reference URL
// summary text area
