-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "turma_id" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "professor_id" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("turma_id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "aluno_id" TEXT NOT NULL,
    "turma_id" TEXT NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("aluno_id","turma_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_id_key" ON "Aluno"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_cpf_key" ON "Aluno"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_id_key" ON "Professor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_cpf_key" ON "Professor"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_turma_id_key" ON "Turma"("turma_id");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_professor_id_key" ON "Turma"("professor_id");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_aluno_id_key" ON "Matricula"("aluno_id");

-- CreateIndex
CREATE UNIQUE INDEX "Matricula_turma_id_key" ON "Matricula"("turma_id");

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_professor_id_fkey" FOREIGN KEY ("professor_id") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "Turma"("turma_id") ON DELETE RESTRICT ON UPDATE CASCADE;
