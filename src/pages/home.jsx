import { Box, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon, AttachmentIcon } from '@chakra-ui/icons';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./style.css";

const fileTypes = ["JSON"];




export const Home = () => {
    const [prompt, setPrompt] = useState("");
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(file);
    };

    const handleSubmit = async () => {


        const response = await fetch('http://localhost:9000/api/v1/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
            })
        });

        console.log("res", response)



        // if (response.ok) {
        //     const data = await response.json();
        //     const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 


        // } else {
        //     const err = await response.text()

        //     messageDiv.innerHTML = "Something went wrong"
        //     alert(err)
        // }
    }

    // const handleChange = (event) => {

    //     var reader = new FileReader();
    //     reader.onload = onReaderLoad;
    //     reader.readAsText(event.target.files[0]);

    // }

    const onReaderLoad = (event) => {

        let obj = JSON.parse(event.target.result);
        obj.messages.forEach(el => {
            console.log(el.content)

        });


    }

    const alert_data = (name, family) => {
        alert('Name : ' + name + ', Family : ' + family);
    }


    return (
        <Box display={"flex"} justifyContent="center" p="8" >
            <Box >
                <FileUploader handleChange={handleChange} name="file" label="Upload or drop a json file right here" types={fileTypes} classes="d_box" />

                {/* <form>
                    <InputGroup size='lg'>

                        <Input
                            pr='4.5rem'
                            type={"file"}
                            onChange={handleChange}
                            placeholder='Search ......'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' type="submit" onClick={handleSubmit}  >
                                <AttachmentIcon />

                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </form> */}
            </Box>

        </Box>
    )
}