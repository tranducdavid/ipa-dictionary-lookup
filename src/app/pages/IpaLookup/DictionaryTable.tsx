import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Grid, Input, styled, TableFooter, TablePagination, useTheme, ButtonProps, Tooltip, Typography } from '@mui/material'
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

  const [isRegexMode, setIsRegexMode] = useState(false)

  const displayData: IpaDictionary = useMemo(() => {
    if (searchValue !== '') {
      if (isRegexMode) {
        const regex = new RegExp(searchValue)
        return data.filter(e => e.pronunciation.some(e => regex.exec(e)) || regex.exec(e.spelling))
      }
      return data.filter(e => e.pronunciation.some(e => e.includes(searchValue)) || e.spelling.includes(searchValue))
    }
    return data
  }, [data, isRegexMode, searchValue])

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
            <TableCell sx={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0 }} colSpan={2}>
              <Grid container flexDirection="row">
                <Input sx={{ height: 33, fontSize: '0.875rem', flexGrow: 1 }} placeholder="search" disableUnderline onChange={handleSearchChange} />
                <Tooltip title="Use regular expression">
                  <RegexButton isRegexMode={isRegexMode} onClick={() => setIsRegexMode(v => !v)}>
                    <Typography>.*</Typography>
                  </RegexButton>
                </Tooltip>
              </Grid>
            </TableCell>
          </TableRow>
          {(rowsPerPage > 0 ? displayData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : displayData).map(row => (
            <TableRow key={row.spelling}>
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

type RegexButtonProps = {
  isRegexMode: boolean
} & ButtonProps

const RegexButton = styled(Button)<RegexButtonProps>(({ isRegexMode, theme }) => ({
  padding: '0px 6px',
  margin: '6px',
  minWidth: 0,
  color: isRegexMode ? theme.palette.primary.contrastText : theme.palette.text.primary,
  backgroundColor: isRegexMode ? theme.palette.primary.main : 'transparent',
  '&:hover': {
    ...(isRegexMode ? { backgroundColor: theme.palette.primary[theme.palette.mode] } : {}),
  },
}))
