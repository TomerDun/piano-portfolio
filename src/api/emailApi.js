export async function connectApi() {
    const url = 'https://pianoplaylist.herokuapp.com';
    const res = await fetch(url);
    console.log('done');
    const data = await res.json();
    return data;

}

export async function sendEmail(subject, content) {
    const url = 'https://pianoplaylist.herokuapp.com/mail';
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
    const email = {
        from_email: 'tomerzx@gmail.com',
        to_email: 'pplaylist5@gmail.com',
        subject: subject,
        content: content
    }    

    const res = await fetch(url, { method: 'POST', body: JSON.stringify(email) , headers: headers});
    const data = await res.json();
    // console.log('used email api');
    return data;
}