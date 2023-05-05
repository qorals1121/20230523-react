import { useState } from "react";

const InterationSample = () => {

    // return (
    //     <ul>
    //         <li>눈사람</li>
    //         <li>얼음</li>
    //         <li>눈</li>
    //         <li>바람</li>
    //     </ul>
    // );

    // const names = ['눈사람', '얼음', '눈', '바람'];
    // // const nameList = names.map(name => <li>{name}</li>)
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>)
    // return <ul>{nameList}</ul>

    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); // 새로운 학목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId, // nextId 값을 id로 설정하고
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더함
        setNames(nextNames); // names 값 업데이트
        setInputText(''); // inputText 비우기
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
)};

export default InterationSample;