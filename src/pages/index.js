import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default function Home() {
    return (
        <div style={{ color: `purple` }}>
            {/* 
            Use <Link> only for internal pages
            For external sites, use <a>
             */}
            <Link to="/contact/">Contact</Link>
            <Header headerText="Hello Gatsby!" />
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    );
}
