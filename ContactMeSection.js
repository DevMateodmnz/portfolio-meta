const ContactMeSection = () => {
  const { response, submit, isLoading } = useSubmit();
  const { onOpen } = useAlertContext();
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: ""
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required")
    })
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel>Name</FormLabel>
          <Input
            id="firstName"
            {...formik.getFieldProps("firstName")}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        
        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        
        <FormControl>
          <FormLabel>Type of Enquiry</FormLabel>
          <Select id="type" {...formik.getFieldProps("type")}>
            <option value="hireMe">Freelance project</option>
            <option value="openSource">Open source</option>
          </Select>
        </FormControl>
        
        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel>Message</FormLabel>
          <Textarea
            id="comment"
            {...formik.getFieldProps("comment")}
          />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>
        
        <Button type="submit" isLoading={isLoading}>Submit</Button>
      </VStack>
    </form>
  );
};