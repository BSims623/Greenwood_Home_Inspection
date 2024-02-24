import styled from 'styled-components';

const Wrapper = styled.section`
background: var(--primary-green);
max-width: 900px;
color: #f8f9fa;
.content-container {
    width: 80%;
}
.icon-container {
    width: 20%;
}
.icon {
    font-size: 3rem;
}
.icon:hover {
    font-size: 3.5rem;
    cursor: pointer;
}
.fa-circle {
    font-size: 1.rem;
}
.fa-circle:hover {
    //font-size: 2rem;
    cursor: pointer;
}
`;

export default Wrapper