import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import config from "../../data/SiteConfig";

let worker = require('../../static/js/worker.js')

class Index extends React.Component {
render() {
return (
      <div> testing </div>
    );
  }
}
