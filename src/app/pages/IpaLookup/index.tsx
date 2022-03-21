import { Grid, Box, useTheme, Button, Link } from '@mui/material'
import * as React from 'react'
import { useMemo, useState } from 'react'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'
import { Loading } from 'app/components/Loading'
import { useDictionaryQuery } from 'app/queries'
import { DictionaryTable } from './DictionaryTable'
import { SelectionMode } from './SelectionButton'
import { SearchEngineManager } from './SearchEngine'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { HelpTooltipIcon } from 'app/components/HelpTooltipIcon'
import { TextPrimaryTypography } from 'app/components/Typography/PrimaryTypography'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']
const phonemes = [consonants, monophthongs, diphthongs].flat()

const useSymbolSelectionState = (symbols: string[]) => useState<SelectionButtonState>(symbolsToSelectionButtonState(symbols))
const symbolStateToQuery = (state: SelectionButtonState, selectionMode: SelectionMode) =>
  Object.entries(state)
    .filter(([_, v]) => v === selectionMode)
    .map(([k, _]) => k)

export function IpaLookup() {
  const { data: dictionary, status: dictionaryStatus } = useDictionaryQuery()
  const isLoading = dictionaryStatus !== 'success'

  const theme = useTheme()

  const [lettersState, setLettersState] = useSymbolSelectionState(letters)
  const [phonemesState, setPhonemesState] = useSymbolSelectionState(phonemes)

  const searchDictionaryQueryArgs = useMemo(
    () => ({
      letters: {
        required: symbolStateToQuery(lettersState, SelectionMode.REQUIRED),
        forbidden: symbolStateToQuery(lettersState, SelectionMode.FORBIDDEN),
      },
      ipaSymbols: {
        required: symbolStateToQuery(phonemesState, SelectionMode.REQUIRED),
        forbidden: symbolStateToQuery(phonemesState, SelectionMode.FORBIDDEN),
      },
    }),
    [lettersState, phonemesState],
  )

  const searchEngine = useMemo(() => (dictionary != null ? SearchEngineManager.create(dictionary) : null), [dictionary])

  const filteredDictionary = useMemo(() => searchEngine?.search(searchDictionaryQueryArgs), [searchEngine, searchDictionaryQueryArgs])

  const OnClickReset = () => {
    setLettersState(symbolsToSelectionButtonState(letters))
    setPhonemesState(symbolsToSelectionButtonState(phonemes))
  }

  return (
    <>
      <Loading open={isLoading} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <TextPrimaryTypography variant="h6">
            Letters
            <HelpTooltipIcon tooltip="Clicking on a button changes the requirement for the dictionary. Blue is required, red is forbidden, white is either." />
          </TextPrimaryTypography>
          <SelectionButtonRow symbols={letters} state={lettersState} setState={setLettersState} />

          <TextPrimaryTypography variant="h6">Phonemes</TextPrimaryTypography>
          <SelectionButtonRow label="Consonants" symbols={consonants} state={phonemesState} setState={setPhonemesState} />

          <Grid container flexDirection="row">
            <Box mr={theme.spacing(2)}>
              <SelectionButtonRow label="Monophthongs" symbols={monophthongs} state={phonemesState} setState={setPhonemesState} />
            </Box>
            <SelectionButtonRow label="Diphthongs" symbols={diphthongs} state={phonemesState} setState={setPhonemesState} />
          </Grid>

          <Box mb={theme.spacing(2)}>
            <Button sx={{ textTransform: 'none', fontWeight: 'bold' }} variant="contained" endIcon={<RestartAltIcon />} onClick={OnClickReset}>
              Reset
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextPrimaryTypography variant="h6">
            Dictionary
            <HelpTooltipIcon tooltip="Search can be used for both spelling and phonetic lookup." />
          </TextPrimaryTypography>
          <Box sx={{ position: 'relative' }}>
            <DictionaryTable data={filteredDictionary ?? []} />
            <TextPrimaryTypography sx={{ opacity: 0.8, fontSize: '0.75rem', marginTop: theme.spacing(1) }} textAlign="center">
              Data source:
              <Link href={`https://github.com/open-dict-data/ipa-dict`} target="_blank" title="Github Page" rel="noopener noreferrer" alignSelf="center">
                https://github.com/open-dict-data/ipa-dict
              </Link>
            </TextPrimaryTypography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
