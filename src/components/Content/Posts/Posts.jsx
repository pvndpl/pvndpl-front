import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import './founation.css'
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';

const categories = ['TV', 'Music', 'Movies', 'Books', 'Games', 'Girls', 'Beer', 'Football', 'Porn'];

class Posts extends Component {
    render() {
        return (
            <div className="NewsFeed">
                <Feed />
            </div>
        );
    }
}

class Feed extends Component {
    constructor(props) {
        super(props);
        axios.get(
            '/profile/posts',
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
            }
        ).then(response => {
            response.data.map(el => {
                const post = {content: el.content, category: el.category}
                this.state = {
                    posts: post || [],
                    filteredPosts: []
                }
            })
            console.log(this.state.posts)
            this.handleNewPost = this.handleNewPost.bind(this);
            this.handleFilter = this.handleFilter.bind(this);
        });
    }

    handleNewPost(post) {
        var posts = this.state.posts.concat([post]);
        this.setState({posts: posts});
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    handleFilter(filter) {
        this.setState({
            filteredPosts: this.state.posts.filter((post) =>
                post.category.toUpperCase() === filter.toUpperCase() ||
                post.content.includes(filter)
            )
        });
    }

    render() {
        const posts = this.state.posts.map((post, index) =>
            <Post key={index} value={post} />
        );
        const filteredPosts = this.state.filteredPosts.map((post, index) =>
            <Post key={index} value={post} />
        );
        return (
            <div className="feed">
                <Filter onFilter={this.handleFilter} />
                {filteredPosts.length > 0 ? filteredPosts : posts}
                <PostForm onSubmit={this.handleNewPost} />
            </div>
        )
    }
}

class Post extends Component {
    render() {
        return (
            <div className="post">
                <span className="label">{this.props.value.category}</span>
                <span className="content">{this.props.value.content}</span>
            </div>
        )
    }
}

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.onSubmit({
            category: this.category.value,
            content: this.content.value
        });
        this.category.value = categories[0];
        this.content.value = '';
        event.preventDefault();
    }

    render() {
        return (
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <select ref={(input) => this.category = input}>
                            {categories.map((category, index) =>
                                <option key={category} value={category}>{category}</option>
                            )}
                        </select>
                    </label>
                    <label>
                        Content:
                        <input type="text" ref={(input) => this.content = input} />
                    </label>
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (event.target.value === '') {
            this.props.onFilter('');
        }
    }

    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.props.onFilter(this.state.value);
        }
    }

    render() {
        return (
            <div>
                <label>
                    <input type="search" value={this.state.value}
                           onChange={this.handleChange}
                           onKeyUp={this.handleKeyUp}
                           placeholder="Filter by category or content..." />
                </label>
            </div>
        )
    }
}

export default Posts;


