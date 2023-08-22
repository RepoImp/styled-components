import React from 'react'
import style from "styled-components"
import twitter_icon from "../assets/twitter.svg"

function Card({ avatar, userName, twitterHandle, followerCount }) {

const Card = style.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`;

const CardContainer = style.div`
    width:262px;
    padding:24px;
    height:auto;
    display:flex;
    align-items:start;
    flex-direction:column;
    border: 1px solid #E6ECEF;
    border-radius:8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    background: #fff;
`;

const Avatar = style.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin-bottom:12px;
`;

const UserName = style.h2`
    font-size: 18px;
    font-weight: 600;
    font-style: normal;
    color: #0C0E11;
    margin: 0;
    line-height: 27.9px;
`;

const TwitterHandle = style.p`
    display:flex;
    gap:8px;
    font-weight: 400;
    color: #7A869F;
    line-height: 20.3px;
    margin: 0;
`;

const Follower = style.p`
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    color: #616D86;
    margin-bottom:0;
`;

const FollowerCount = style.span`
    font-weight: 500;
    line-height: 24px;
    color: #1A1A1A;

`;
  return (
    <>
      <Card>
        <CardContainer>
            <Avatar src={avatar} alt={`${userName}'s avatar`} />
            <UserName>{userName}</UserName>
            <TwitterHandle><img src={twitter_icon} alt={`twitter`}></img>{twitterHandle}</TwitterHandle>
            <Follower><FollowerCount>{followerCount}</FollowerCount> Followers</Follower>
        </CardContainer>
      </Card>
    </>
  )
}

export default Card
