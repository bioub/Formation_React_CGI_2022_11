import { Component } from "react";
import { useForm } from "react-hook-form";

// class UserForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: 'toto',
//       isActive: true,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     const stateKey = event.target.name;
//     const stateValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
//     this.setState({
//       [stateKey]: stateValue, // ES2015 Computed Property name
//     });
//   }
//   render() {
//     console.log('render UserForm');

//     const { username, isActive } = this.state;
//     return (
//       <form className="UserForm">
//         <div>
//           Username : <input name="username" type="text" value={username} onChange={this.handleChange} />
//         </div>
//         <div>
//           Active : <input name="isActive" type="checkbox" checked={isActive} onChange={this.handleChange} />
//         </div>
//         <div>
//           <button>Send</button>
//         </div>
//       </form>
//     );
//   }
// }

function UserForm() {
  console.log('render UserForm')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="UserForm" onSubmit={handleSubmit(onSubmit)}>
      <div>
        Username :{" "}
        <input
          type="text"
          {...register("username", { required: true, maxLength: 12 })}
        />
        {errors.username?.type === 'required' && <div>Ce champ est obligatoire</div>}
        {errors.username?.type === 'maxLength' && <div>Ce champ ne doit pas dépasser 12 caractères</div>}
      </div>
      <div>
        Active :{" "}
        <input
          type="checkbox"
          {...register("isActive")}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export default UserForm;
