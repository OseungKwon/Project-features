import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import { useFormik, Form, FormikProvider } from 'formik';
import { useSnackbar } from 'notistack';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Stack, Typography, TextField } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// utils
import fakeRequest from '../../utils/fakeRequest';
import { forwardRef, useRef } from 'react';

//import { signOut, useSession } from 'next-auth/client'
// ----------------------------------------------------------------------

const Editor = dynamic(() => import('src/components/editor/TuiEditor'), { ssr: false })
// 2. Pass down to child components using forwardRef
const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
))
const RootStyles = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadiusMd,
  // backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function BlogPostCommentForm() {
  const { enqueueSnackbar } = useSnackbar();
  const CommentSchema = Yup.object().shape({
    //comment: Yup.string().required('내용을 입력해 주세요.'),
    //name: Yup.string().required('Name is required'),
    //email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });
  const editorRef = useRef(null);
  
  const formik = useFormik({
    initialValues: {
      comment: '',
      name: '',
      email: '',
    },
    validationSchema: CommentSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      const instance = editorRef.current.getInstance();
      values.comment = instance.getMarkdown();
        
      // console.log(values);
      if (!values.comment) return;
      try {
        await fakeRequest(500);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar('댓글을 등록하였습니다.', { variant: 'success' });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors({ afterSubmit: error.code });
      }
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <RootStyles>
      {/* <Typography variant="subtitle1" sx={{ mb: 3 }}>
        댓글
      </Typography> */}

      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={1} alignItems="flex-end">
            <EditorWithForwardedRef
                placeholder="질문의 해결법을 알면 답을 달아주세요!"
                initialValue={""}                                               
                height="300px"
                initialEditType="markdown"
                useCommandShortcut={true}
                {...getFieldProps('comment')}
                ref={editorRef}
            />

            {/* <TextField
              fullWidth
              label="Name *"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            /> */}

            {/* <TextField
              fullWidth
              label="Email *"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            /> */}

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              댓글 작성
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </RootStyles>
  );
}
