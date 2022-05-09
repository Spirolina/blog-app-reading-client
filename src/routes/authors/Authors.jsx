import React from 'react'
import { Author } from '../../components/author/Author';
import { Loading } from '../../components/loading/Loading';
import { useGetAuthors } from '../../hooks/useGetAuthors'
import '../authors/authors.css'

export const Authors = () => {
  const { authors, loading, errors } = useGetAuthors();

  if (loading) {
    return (
      <div className='authors'>
        <Loading className='authors-loading' type='spin' color='#ff8a00' />
      </div>
    )
  }

  if(authors)
  return (
    <div className='authors'>
      <div className='authors-title'>
        <h2>
          Authors  
        </h2>
      </div>
      {authors.map(author => <Author author={author} />)}

    </div>
  )
}
