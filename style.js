import React from 'react';
import './styles.css'; // Import CSS file for styling

const TopicPage = () => {
  return (
    <div>
      <h1 className="title">CAMPUS FORA | TOPIC X</h1>
      <a href="login.html" className="link">Login/Up</a>
      <hr className="hr" />
      <br />
      <h2 className="subtitle">Title</h2>
      <p className="content">Content</p>
      <div className="related-questions">
        <h2>Related Questions</h2>
        <a href="RelatedQues1.html" className="question-link">RelatedQues1</a> <br />
        <a href="RelatedQues2.html" className="question-link">RelatedQues2</a> <br />
        <a href="RelatedQues3.html" className="question-link">RelatedQues3</a> <br />
        <a href="RelatedQues4.html" className="question-link">RelatedQues4</a>
      </div>
      <div className="user-comment">
        <p className="comment">Arijit Ganguly Does worst grading be aware of him</p>
        <pre>
          <button className="button">Like <p className="count">13</p></button>
          <button className="button">Upvote <p className="count">10</p></button>
          <h2 className="comment-title">Comments</h2>
          <form action="/html/tags/html_form_tag_action.cfm" method="post">
            <div>
              <textarea name="comments" id="comments" className="comment-box" style={{fontFamily: 'sans-serif', fontSize: '1.2em'}}></textarea>
            </div>
            <input type="submit" value="Submit" className="submit-button" />
          </form>
        </pre>
      </div>
    </div>
  );
}

export default TopicPage;