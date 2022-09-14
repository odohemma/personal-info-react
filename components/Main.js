import React from "react"

export default function Main() {
    return (
        <div className = "main">
            <div className = "full-name">Emmanuel Odoh</div>
            <div className = "job-title">Frontend Developer</div>
            <div className = "website">github.com/odohemma</div>
            <button className = "button">
                <img src = "./images/Mail.png" className = "mail"/>
                <div className = "email-text">Email</div>
            </button>
            <div className = "text-header">About</div>
            <div className = "text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</div>
            <div className = "text-header">Interests</div>
            <div className = "text">Football expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</div>
        </div>
    )
}