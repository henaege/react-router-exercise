import React, { Component } from 'react';
import $ from 'jquery'

class About extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon: weatherData.weather[0].icon,
				temp: weatherData.main.temp,
				temp_min: weatherData.main.temp_min,
				temp_max: weatherData.main.temp_max,
				desc: weatherData.weather[0].description
			})
		});
	}
 
	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<th>Current Conditions</th>
								<th>Description</th>
								<th>Current Temp</th>
								<th>Min Temp</th>
								<th>Max Temp</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
								</td>
								<td>
									{this.state.desc}
								</td>
								<td>
									{this.state.temp}
								</td>
								<td>
									{this.state.temp_min}
								</td>
								<td>
									{this.state.temp_max}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}

export default About;
