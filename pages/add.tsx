import React from 'react'
import AddTeamComponent from '@/components/AddTeamComponent'

function Add() {
  return (
    <div>
      <AddTeamComponent teamType="방덱" />
      <AddTeamComponent teamType="공덱" />
    </div>
  )
}

export default Add
