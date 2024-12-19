-- CreateTable
CREATE TABLE "Presenca" (
    "aluno_id" TEXT NOT NULL,
    "turma_id" TEXT NOT NULL,
    "presenca" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Presenca_pkey" PRIMARY KEY ("aluno_id","turma_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Presenca_aluno_id_key" ON "Presenca"("aluno_id");

-- CreateIndex
CREATE UNIQUE INDEX "Presenca_turma_id_key" ON "Presenca"("turma_id");

-- AddForeignKey
ALTER TABLE "Presenca" ADD CONSTRAINT "Presenca_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presenca" ADD CONSTRAINT "Presenca_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "Turma"("turma_id") ON DELETE RESTRICT ON UPDATE CASCADE;
