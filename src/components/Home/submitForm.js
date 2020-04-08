export function submitForm(props) {
    const { formData, change } = props;
    const { room } = formData;
    const finalRoom = room.split(" ").join("");
    change('room', finalRoom);
    props.history.push(`/meet/${finalRoom}`);
}