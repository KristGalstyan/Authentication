import React, { useEffect, useRef, useState } from 'react'
import {
  About,
  AboutMe,
  Input,
  List,
  ListAboutMe,
  ProfileWrapper,
  SaveBtn,
  UserImg,
  UserName
} from './profile'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAction } from '../../hook/useAction'

function Profile() {
  const navigate = useNavigate()
  const { deleteFromToDo, pushToDo } = useAction()
  const { data } = useSelector((state) => state.sign)
  useEffect(() => {
    if (!data) {
      navigate('/')
    }
  }, [])
  const { todo } = useSelector((state) => state.todo)
  const [img, setImg] = useState('')
  const [value, setValue] = useState('')

  const ref = useRef()

  async function sendPhotoToServer(photo) {
    try {
      const data = new FormData()
      data.append('image', photo)
      await axios
        .post('http://localhost:4444/upload', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          setImg(res.data.url)
        })
    } catch (e) {
      console.log(e)
    }
  }

  function handleInput() {
    console.log(ref.current.click())
  }

  return (
    <ProfileWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <strong>Click on the photo to change the image</strong>
        <img
          src="/img/down-arrow.png"
          alt="down arrow"
          style={{ width: '30px' }}
        />
        <UserImg
          onClick={() => handleInput()}
          src={
            img || data?.user?.avatar || data?.avatar
              ? data?.user?.avatar || img || data?.avatar
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlSdPlC4NmToI9yullNIXNb-voI9An-tN4414hn6g28zwTdlWJbJWHonHJ7SG-6bfDt10&usqp=CAU'
          }
        />
      </div>
      <Input
        type="file"
        name="image"
        ref={ref}
        onChange={(e) => sendPhotoToServer(e.target.files[0])}
      />
      <UserName>
        {data?.user?.name || data?.name ? 'Name -' : ''}{' '}
        {data?.user?.name || data?.name}
      </UserName>
      <UserName>
        {data?.email ? 'Email -' : ''}
        {data?.email}
      </UserName>
      <List>
        {todo.map((elm, i) => {
          return (
            <ListAboutMe onClick={() => deleteFromToDo(i)} key={elm + i}>
              {elm}
            </ListAboutMe>
          )
        })}
      </List>
      <About>
        <AboutMe
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write Something"
        ></AboutMe>
        <SaveBtn onClick={() => pushToDo(value)} src="/img/add.png" />
      </About>
    </ProfileWrapper>
  )
}

export default Profile
