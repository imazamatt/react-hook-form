import { useForm } from 'react-hook-form'
import { useState } from 'react'

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (values) => {
    reset()
    console.log(values)
  }

  return (
    <>
      <form className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
        <div className={'form-groups'}>
          <div className="form-group">
            <label className={'form-label'} htmlFor="firstName">
              First Name
            </label>
            <input
              className={`form-input ${errors.firstName ? 'invalid' : ''}`}
              type="text"
              name="firstName"
              placeholder="First Name"
              id="firstName"
              autoComplete={'off'}
              {...register('firstName', {
                required: 'First Name is required',
                minLength: { value: 3, message: 'Minimum length is 3' }
              })}
              onKeyUp={() => {
                trigger('firstName')
              }}
            />
            {errors.firstName && (
              <span className={'form-error'}>{errors.firstName?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="lastName">
              Last Name
            </label>
            <input
              className={`form-input ${errors.lastName ? 'invalid' : ''}`}
              type="text"
              name="lastName"
              placeholder="Last Name"
              id="lastName"
              autoComplete={'off'}
              {...register('lastName', {
                required: 'Last Name is required',
                minLength: { value: 4, message: 'Minimum length is 4' }
              })}
              onKeyUp={() => {
                trigger('lastName')
              }}
            />
            {errors.lastName && (
              <span className={'form-error'}>{errors.lastName?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="gender">
              Choose your gender
            </label>
            <select className={'form-gender'} name="gender" id="gender">
              <option value={''}>Select gender</option>
              <option value={'male'}>Male</option>
              <option value={'female'}>Female</option>
              <option value={'other'}>Other</option>
            </select>
            {errors.lastName && (
              <span className={'form-error'}>{errors.gender?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="email">
              Email
            </label>
            <input
              className={`form-input ${errors.email ? 'invalid' : ''}`}
              type="email"
              name="text"
              placeholder="Email"
              id="email"
              autoComplete={'off'}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  message: 'Email must be valid email'
                }
              })}
              onKeyUp={() => {
                trigger('email')
              }}
            />
            {errors.email && (
              <span className={'form-error'}>{errors.email?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="phone">
              Phone Number
            </label>
            <input
              className={`form-input ${errors.phone ? 'invalid' : ''}`}
              type="text"
              name="phone"
              placeholder="Phone Number"
              id="phone"
              autoComplete={'off'}
              {...register('phone', {
                required: 'Phone Number is required',
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: 'Phone Number must be valid'
                }
              })}
              onKeyUp={() => {
                trigger('phone')
              }}
            />
            {errors.phone && (
              <span className={'form-error'}>{errors.phone?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="birthday">
              Birthday
            </label>
            <input
              className={`form-input ${errors.birthday ? 'invalid' : ''}`}
              type="date"
              name="birthday"
              placeholder="Birthday"
              id="birthday"
              autoComplete={'off'}
              {...register('birthday', { required: 'Birthday is required' })}
            />
            {errors.birthday && (
              <span className={'form-error'}>{errors.birthday?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="password">
              Password
            </label>
            <input
              className={`form-input ${errors.password ? 'invalid' : ''}`}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              autoComplete={'off'}
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              onKeyUp={() => {
                trigger('password')
              }}
            />
            {errors.password && (
              <span className={'form-error'}>{errors.password?.message}</span>
            )}
          </div>

          <div className="form-group">
            <label className={'form-label'} htmlFor="confirm">
              Confirm Password
            </label>
            <input
              className={`form-input ${errors.confirm ? 'invalid' : ''}`}
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              id="confirm"
              autoComplete={'off'}
              {...register('confirm', { required: 'Confirm your password' })}
              onKeyUp={() => {
                trigger('confirm')
              }}
            />
            {errors.confirm && (
              <span className={'form-error'}>{errors.confirm?.message}</span>
            )}
          </div>

          <div className={'form-submit'}>
            <button className={'form-btn'} type={'submit'}>
              Sign&nbsp;Up
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
