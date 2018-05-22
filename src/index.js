import React, { Component } from 'react';
import { render } from 'react-dom';
import jparam from 'jquery-param';
import axios from 'axios';

export default class App extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    let url = 'http://localhost:1234/api/getEntity/test?' + jparam({
                        filter: {
                            name: 'balanar'
                        },
                        id: 'krobe'
                    })
                    axios.get(url, {
                        headers: {
                            'Authorization': 'f076e94f66cf3b94d39ada2065264aa56fa4c6e08eb0be5e76f2cbfd43ee6b11132cc2957439306a875a9678c4a6db49ded671468e625dcacf23c756e0ca4ee395b8cb355057ce2a60c2e18427669ed2f0a7b0f207fd7bf7917d696dae32a93c2e4be017a350c29661cafed386e4f74e8fd3917188a0932693140c166ef6af706aa9f0a0c7e295efcdd4a7dcd2674e9c20d971e2d1ed62b8677315eb8df7286c288fed50dab9c6f767a8da66c92ebe80cd32da1ba0872fae2ca1fa7961a1920741c67f4090a6a744cb5ba1c10d7088d26785195c5a6a39c364e74cc5a105a383d705de3b00d16ce4059b38c21fb635fe96d02a2d4b1fd76e45eebfa66d3b88'
                        }
                    }).then(function (res) {
                        console.log(res.data)
                    })
                }}>CLick</button>
            </div>
        );
    }
}

render(<App />, document.getElementById('container'));