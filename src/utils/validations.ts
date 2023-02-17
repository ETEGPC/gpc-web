import { number, object, string } from 'yup';

const accountSchema = object({
  email: string().required('O campo email é obrigatório').email('O email inserido não é válido.'),
  fullName: string().required('O campo nome completo é obrigatório.'),
  password: string().required('O campo senha é obrigatório.'),
});

const relativeSchema = object({
  fullName: string().required('O campo nome do estudante é obrigatório.'),
  kinship: string().required('O campo parentesco é obrigatório.'),
  schoolClass: string().required('O campo turma é obrigatório.')
});

const defaultSolicitationSchema = object({
  type: string<'Declaração de matrícula' | 'Declaração de frequência' | 'Ficha 19'>().required('Você deve selecionar um tipo válido de documento.'),
  student: string().required('O campo nome do aluno é obrigatório.'),
  schoolClass: string().required('O campo turma é obrigatório.')
});

const ficha19SolicitationSchema = object({
  type: string<'Declaração de matrícula' | 'Declaração de frequência' | 'Ficha 19'>().required('Você deve selecionar um tipo válido de documento.'),
  student: string().required('O campo nome do aluno é obrigatório.'),
  schoolClass: string().required('O campo turma é obrigatório.'),
  mother: string().required('O nome da mãe é obrigatório.'),
  father: string().required('O nome do pai é obrigatório.'),
  phone: string().required('O número de telefone é obrigatório.'),
  startYear: number().required('O ano de entrada é um campo obrigatório.'),
  completionYear: number().required('O ano de término é obrigatório.'),
});

export {
  accountSchema,
  relativeSchema,
  defaultSolicitationSchema,
  ficha19SolicitationSchema
};