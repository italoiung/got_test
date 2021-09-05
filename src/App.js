import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyle, Layout, ColumnWrap } from './style'

import Header from './components/Header'
import Column from './components/Column'
import Item from './components/Item'

import stark from './assets/img/stark.png'
import lannister from './assets/img/lannister.png'
import baratheon from './assets/img/baratheon.png'
import targaryen from './assets/img/targaryen.png'
import greyjoy from './assets/img/greyjoy.png'
import tyrell from './assets/img/tyrell.png'
import martell from './assets/img/martell.png'
import tully from './assets/img/tully.png'
import arryn from './assets/img/arryn.png'
import other from './assets/img/other.png'

import '@fontsource/montserrat'
import '@fontsource/montserrat/600.css'
import '@fontsource/eb-garamond/400-italic.css'
import '@fontsource/lora'
import MemberInfo from './components/MemberInfo'

const App = () => {
  const houseStamps = {
    'House Stark': stark,
    'House Lannister': lannister,
    'House Baratheon': baratheon,
    'House Targaryen': targaryen,
    'House Greyjoy': greyjoy,
    'House Tyrell': tyrell,
    'House Martell': martell,
    'House Tully': tully,
    'House Arryn': arryn,
    'Free Folk': other,
  }

  const allowedHouses = [
    'House Stark',
    'House Lannister',
    'House Baratheon',
    'House Targaryen',
    'House Greyjoy',
    'House Tyrell',
    'House Martell',
    'House Tully',
    'House Arryn',
    'Free Folk',
  ]

  const [houses, setHouses] = useState([])
  const [activeHouse, setActiveHouse] = useState(0)
  const [activeMember, setActiveMember] = useState(null)

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((response) => response.json())
      .then((chars) => {
        fetch('https://game-of-thrones-quotes.herokuapp.com/v1/characters')
          .then((response) => response.json())
          .then((charQuotes) => {
            let houses = allowedHouses.map(house => chars.filter(char => char.family === house))
            houses = houses.map(house => house.map(char => {
              const matchedChar = charQuotes.find((charQuote) => char.fullName === charQuote.name)
              const quote = matchedChar ? matchedChar.quotes[0] : ''
              return { ...char, quote }
            }))
            setHouses(houses)
          })
      })
  }, [])

  useEffect(() => {
    setActiveMember(null)
  }, [activeHouse])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Header />
          <ColumnWrap>
            <Column title='Famílias'>
              {allowedHouses.map((house, index) =>
                <Item
                  imageSrc={houseStamps[house]}
                  title={house}
                  isActive={index === activeHouse}
                  onClick={() => { setActiveHouse(index) }}
                  key={index}
                />
              )}
            </Column>
            {!!houses.length &&
              <Column title='Membros'>
                {houses[activeHouse].map((member, index) =>
                  <Item
                    imageSrc={member.imageUrl}
                    title={member.fullName}
                    subtitle={member.title}
                    isActive={index === activeMember}
                    isMember={true}
                    onClick={() => { setActiveMember(index) }}
                    key={index}
                  />
                )}
                {!houses[activeHouse].length && <p>Não foi encontrado nenhum membro para essa família :(</p>}
              </Column>
            }
            {!!houses.length && activeMember !== null &&
              <MemberInfo
                imageSrc={houses[activeHouse][activeMember].imageUrl}
                nameText={houses[activeHouse][activeMember].fullName}
                title={houses[activeHouse][activeMember].title}
                quote={houses[activeHouse][activeMember].quote}
              />
            }
          </ColumnWrap>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App;
