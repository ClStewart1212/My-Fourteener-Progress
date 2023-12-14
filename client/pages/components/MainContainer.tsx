import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

//TODO: import child components
import CardContainer from './CardContainer'
import FilterContainer from './FilterContainer'
import { cardInfo } from '../../hooks/hooks'

type MainContainerProps = {
  cardInfo: cardInfo[]
  setUserUpdate: React.Dispatch<React.SetStateAction<number>>
  isLoading: boolean
}

const MainContainer = ({
  cardInfo,
  setUserUpdate,
  isLoading,
}: MainContainerProps) => {
  return (
    <div id="mainContainer">
      <FilterContainer />
      {isLoading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <CardContainer cardInfo={cardInfo} setUserUpdate={setUserUpdate} />
      )}
    </div>
  )
}

export default MainContainer
