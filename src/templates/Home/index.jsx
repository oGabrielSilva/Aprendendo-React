import { Component } from 'react';
import './styles.css';
import { Search } from '../../components/Search';
import { Button } from '../../components/Button';
import { Posts } from '../../components/Post';
import { loadPosts } from '../../utils/loadPosts';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 10,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const photosAndPosts = await loadPosts();
    this.setState({
      posts: photosAndPosts.slice(page, postPerPage),
      allPosts: photosAndPosts
    });
  }

  loadMorePosts = () => {
    const {
      page,
      posts,
      postPerPage,
      allPosts
    } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;
    const filterPosts = !!searchValue ? allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <>
              <h1>searchValue: {searchValue}</h1><br />
            </>
          )}

          <Search
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>

        {filterPosts.length > 0 ? (
          <Posts posts={filterPosts} />
        ) : <p>Não foram encontrados posts :c</p>}

        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text={'Load More Posts'}
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
