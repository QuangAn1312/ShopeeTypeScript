import classNames from 'classnames'
import { omit } from 'lodash'
import React from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import path from 'src/contants/path'
import { sortBy, order as orderConstant } from 'src/contants/product'
import { ProductListConfig } from 'src/types/product.type'
import { QueryConfig } from '../ProductList'
interface Props {
  queryConfig: QueryConfig
  pageSize: number
}
export default function SortProductList({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()
  const isActiveSortbY = (sortByVlue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByVlue
  }
  const handleSort = (sortByVlue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByVlue
          },
          ['order']
        )
      ).toString()
    })
  }
  const hanlePriceOrder = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
  return (
    <div className='bg-gray-300/40 py-4 px-3 '>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>Sắp xếp theo</div>
          <button
            className={classNames('h-8 bg-orange px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortbY(sortBy.view),
              'bg-white text-black hover:bg-slate-100': !isActiveSortbY(sortBy.view)
            })}
            onClick={() => handleSort(sortBy.view)}
          >
            Phổ biến
          </button>
          <button
            className={classNames('h-8 bg-orange px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortbY(sortBy.createdAt),
              'bg-white text-black hover:bg-slate-100': !isActiveSortbY(sortBy.createdAt)
            })}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            Mới nhất
          </button>
          <button
            className={classNames('h-8 bg-orange px-4 text-center text-sm capitalize', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortbY(sortBy.sold),
              'bg-white text-black hover:bg-slate-100': !isActiveSortbY(sortBy.sold)
            })}
            onClick={() => handleSort(sortBy.sold)}
          >
            Bán chạy
          </button>
          <select
            className={classNames('capitalite h-8  px-4 text-left text-sm capitalize  outline-none ', {
              'bg-orange text-white hover:bg-orange/80': isActiveSortbY(sortBy.price),
              'bg-white text-black hover:bg-slate-100': !isActiveSortbY(sortBy.price)
            })}
            value={order || ''}
            onChange={(event) => hanlePriceOrder(event.target.value as Exclude<ProductListConfig['order'], undefined>)}
          >
            <option value='' disabled className='bg-white text-black'>
              Giá
            </option>
            <option value={orderConstant.asc} className='cursor-pointer bg-white text-black'>
              Giá thấp đến cao
            </option>
            <option value={orderConstant.desc} className='bg-white text-black'>
              Cao đến thấp
            </option>
          </select>
        </div>

        <div className='items-center'>
          <div className='flex'>
            <span className='text-orange'>{page}</span>
            <span>/{pageSize}</span>
            <div className='ml-2 flex'>
              {page === 1 ? (
                <span className='flex h-8 w-9 cursor-not-allowed items-center justify-center rounded-tl-sm rounded-bl-sm  bg-white/60 shadow hover:bg-slate-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>{' '}
                </span>
              ) : (
                <Link
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      page: (page - 1).toString()
                    }).toString()
                  }}
                  className='flex h-8 w-9 items-center justify-center rounded-tl-sm rounded-bl-sm  bg-white shadow hover:bg-slate-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </Link>
              )}
              {page === pageSize ? (
                <span className='flex h-8 w-9 items-center justify-center rounded-tl-sm rounded-bl-sm  bg-white/60 shadow hover:bg-slate-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </span>
              ) : (
                <Link
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      page: (page + 1).toString()
                    }).toString()
                  }}
                  className='flex h-8 w-9 items-center justify-center rounded-tl-sm rounded-bl-sm  bg-white shadow hover:bg-slate-100'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-3 w-3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
