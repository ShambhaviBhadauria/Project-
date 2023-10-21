import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


async function main() {
  try {
    const post = await prisma.form.create({
      data: {
        title: "Scrum: The Art of Doing Twice the Work in Half the Time",
        authorname: "Jeff Sutherland",
        yearOfPublication: "30/09/2014",
        volume: 1,
        extraInformation: "Jeff is the co-creator of Scrum and a leading expert on how this way of working has evolved to meet the needs of today's business.",
        responseEmail: "Jeff@rediffmail.com"
      }
    });
    console.log(post);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
 
