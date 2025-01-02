"use client"
import { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "@/styles/textEditor.css"


export default function TextEditor({ error, onEditorChange, value }) {
    const editorRef = useRef(null);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, [])

    if (mount) {
        return (
            <div className={`border border-primary-800 ${error && "!border-red-500"} rounded-lg`}>
                <Editor
                    apiKey='y1hsr5hnrso0c2guy4bmu2moriexh55f55ffmw4cn100pc3g'
                    onInit={(evt, editor) => editorRef.current = editor}
                    // initialValue={`<p></p>`}
                    onEditorChange={onEditorChange}
                    value={value}
                    init={{
                        branding: false,
                        height: 500,
                        placeholder: 'بنویسید...',
                        language: "fa",
                        deprecation_warnings: false,
                        // plugins: [
                        //     'advlist', 'autolink', 'link', 'advlist', 'advlink', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                        //     'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                        //     'media', 'table', 'emoticons', 'template', 'help'
                        // ],
                        link_rel_list: [
                            { title: 'No Referrer', value: 'noreferrer' },
                            { title: 'External Link', value: 'external' },
                            { title: 'nofollow', value: 'nofollow' },
                        ],
                        menubar: 'file edit view insert format tools table help',
                        menu: {
                            file: { title: 'File', items: 'newdocument restoredraft | preview | export print | deleteallconversations' },
                            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                            view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
                            insert: { title: 'Insert', items: 'image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
                            format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
                            tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                            table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                            help: { title: 'Help', items: 'help' }
                        },

                        font_family_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                        toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                            'forecolor backcolor emoticons | help',
                        content_style: `body { font-size:14px }`
                    }}
                />
            </div>
        )
    }
}