import styled from 'styled-components'

const Navbar = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 padding: 1em;
 background-color:${props => props.theme.colors.primary};
 box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
`

export default Navbar