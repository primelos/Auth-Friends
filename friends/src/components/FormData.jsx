import React, {Component} from 'react';
import  axiosWithAuth  from '../utils/axiosWithAuth';

class FormData extends Component {
	state = {
		id: 0,
		name: 'Name...',
		age: 'Age...',
		email: 'Email...'
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	createFriend = (e) => {
		e.preventDefault();
		const newFriend = {
			id: Date.now(),
			name: this.state.name,
			age: Number(this.state.age),
			email: this.state.email
		};
		this.addFriend(newFriend);
	};

	addFriend = (newFriend) => {
		axiosWithAuth()
			.post('/api/friends', newFriend)
			.then((res) => {
				console.log('NewFriendForm post response', res);
				this.props.getData();
			})
			.catch((err) => console.log(err.response));
	};

	render() {
		return (
			<div className="newFriendForm">
				<form onSubmit={this.createFriend}>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					<input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
					<button>Add Friend</button>
				</form>
			</div>
		);
	}
}
export default FormData