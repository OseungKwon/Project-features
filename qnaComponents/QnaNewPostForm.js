import React, { useCallback, useState, useRef, forwardRef } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Comment from "./Comment";
import { useSnackbar } from "notistack";

import { addPost, editPost } from "src/redux/slices/blog";
import { Form, FormikProvider, useFormik } from "formik";
import { useDispatch } from "src/redux/store";
// material
import { LoadingButton } from "@material-ui/lab";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Chip,
  Stack,
  Button,
  Switch,
  TextField,
  Typography,
  Autocomplete,
  FormHelperText,
  FormControlLabel
} from "@material-ui/core";
// utils
import fakeRequest from "../../utils/fakeRequest";
//import { QuillEditor } from '../editor';
import UploadSingleFile from "../upload/UploadSingleFile";
const Viewer = dynamic(() => import("../editor/TuiViewer"), { ssr: false });
const Editor = dynamic(() => import("../editor/TuiEditor"), { ssr: false });
const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));
const TAGS_OPTION = ["Javascript", "Java", "React", "Vue", "Angular"];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));
const QnaNewPostForm = ({ user }) => {
  const qna = useSelector(state => state.qnaSample);
  const router = useRouter();
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const handleOpenPreview = () => {
    setOpen(true);
  };
  const handleClosePreview = () => {
    setOpen(false);
  };
  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required("제목을 입력하세요")
    //description: Yup.string().required('설명을 입력하세요'),
    //content: Yup.string().min(1000).required('내용을 입력해 주세요.'),
    //cover: Yup.mixed().required('Cover is required'),
  });
  const formik = useFormik({
    initialValues: {
      qnaId: qna?.qnaId,
      title: qna?.title,
      description: "",
      content: qna?.content,
      cover: null,
      tags: qna?.tags,
      publish: true,
      comments: true,
      metaTitle: "",
      metaDescription: "",
      metaKeywords: []
    },
    validationSchema: NewBlogSchema,
    //글쓰기
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // blog/blogNewPost
        // resetForm();
        // handleClosePreview();
        // setSubmitting(false);
        enqueueSnackbar("저장되었습니다.", { variant: "success" });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
      }
    }
  });

  const {
    errors,
    values,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    getFieldProps,
    handleChange
  } = formik;
  const handleDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue("cover", {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );
  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="제목"
                    {...getFieldProps("title")}
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                    value={values.title}
                    onChange={handleChange}
                  />
                  <Autocomplete
                    multiple
                    freeSolo
                    value={values.tags}
                    onChange={(event, newValue) => {
                      setFieldValue("tags", newValue);
                    }}
                    options={TAGS_OPTION.map(option => option)}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          key={option}
                          size="small"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={params => (
                      <TextField {...params} label="태그" />
                    )}
                  />

                  <div>
                    <LabelStyle>내용</LabelStyle>
                    <EditorWithForwardedRef
                      placeholder="머릿 속 풍부한 내용들을 정리해 주세요."
                      initialValue={values.content}
                      previewStyle="vertical"
                      height="600px"
                      initialEditType="markdown"
                      useCommandShortcut={true}
                      ref={editorRef}
                    />

                    {touched.content && errors.content && (
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.content && errors.content}
                      </FormHelperText>
                    )}
                  </div>

                  <div>
                    <LabelStyle>썸네일</LabelStyle>
                    <UploadSingleFile
                      maxSize={3145728}
                      accept="image/*"
                      file={values.cover}
                      onDrop={handleDrop}
                      error={Boolean(touched.cover && errors.cover)}
                    />
                    {touched.cover && errors.cover && (
                      <FormHelperText error sx={{ px: 2 }}>
                        {touched.cover && errors.cover}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <Switch
                          {...getFieldProps("publish")}
                          checked={values.publish}
                        />
                      }
                      label="공개여부"
                      labelPlacement="start"
                      sx={{
                        mb: 1,
                        mx: 0,
                        width: "100%",
                        justifyContent: "space-between"
                      }}
                    />

                    <FormControlLabel
                      control={
                        <Switch
                          {...getFieldProps("comments")}
                          checked={values.comments}
                        />
                      }
                      label="댓글여부"
                      labelPlacement="start"
                      sx={{
                        mx: 0,
                        width: "100%",
                        justifyContent: "space-between"
                      }}
                    />
                  </div>
                </Stack>
                <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
                  <LoadingButton
                    fullWidth
                    type="submit"
                    variant="contained"
                    size="large"
                    loading={isSubmitting}
                  >
                    작성하기
                  </LoadingButton>
                  <Button
                    fullWidth
                    type="button"
                    color="inherit"
                    variant="outlined"
                    size="large"
                    onClick={() => router.back()}
                    sx={{ ml: 1.5 }}
                  >
                    나가기
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  );
};

export default QnaNewPostForm;
