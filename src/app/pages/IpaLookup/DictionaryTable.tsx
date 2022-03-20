import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Input, styled, TableFooter, TablePagination, useTheme } from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions'
import { IpaDictionary } from 'app/types'
import { useState, useMemo, useCallback, MouseEvent, ChangeEvent } from 'react'
import { debounce } from 'app/utils'

type DictionaryTableProps = {
  data: IpaDictionary
}

export function DictionaryTable({ data }: DictionaryTableProps) {
  const theme = useTheme()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [searchValue, setSearchValue] = useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetSearchValue = useCallback(
    debounce((v: string) => setSearchValue(v)),
    [setSearchValue],
  )

  const handleSearchChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    debouncedSetSearchValue(event.target.value)
  }

  const displayData: IpaDictionary = useMemo(
    () => (searchValue !== '' ? data.filter(e => e.pronunciation.includes(searchValue) || e.spelling.includes(searchValue)) : data),
    [data, searchValue],
  )

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ bgcolor: theme.palette.primary.main }}>
            <TableHeadCell>Spelling</TableHeadCell>
            <TableHeadCell>Phonetic</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="i:search">
            <TableCell sx={{ paddingTop: 0, paddingBottom: 0 }} colSpan={2}>
              <Input sx={{ height: 33, fontSize: '0.875rem' }} placeholder="search" fullWidth disableUnderline onChange={handleSearchChange} />
            </TableCell>
          </TableRow>
          {(rowsPerPage > 0 ? displayData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : displayData).map(row => (
            <TableRow key={row.spelling} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.spelling}</TableCell>
              <TableCell>{row.pronunciation.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 15, 20, 25, 100]}
              colSpan={2}
              count={displayData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

const TableHeadCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightBold,
}))
