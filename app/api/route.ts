import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body
    const requestBody = await req.json();
    const hash: string = requestBody.hash;

    // Validate the input
    if (!hash) {
      return new NextResponse("Hash is required", { status: 400 });
    }

    // Create the record in the database
    const addHash = await prisma.hash.create({
      data: {
        hash: hash,
      },
    });

    // Return a success response
    return NextResponse.json(
      {
        message: "Hash created successfully",
        id: addHash.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    // Log the error for debugging
    console.error("Error in creating hash:", error);

    // Return an error response
    return NextResponse.json(
      {
        message: "Error in creating hash",
        error: error.message,
      },
      { status: 500 }
    );
  }
};


export const GET = async (req: NextRequest) => {
  try {
    // Parse the request body to get the ID (if provided)
    const body = await req.json().catch(() => null); // Use .catch to handle missing body
    const id = body?.id;

    if (id) {
      // Fetch a specific record by ID
      const getSpecificHash = await prisma.hash.findUnique({
        where: {
          id: id, // Adjust based on your ID type (string/number)
        },
      });

      return NextResponse.json(
        {
          message: "Specific data retrieved successfully",
          data: getSpecificHash,
        },
        {
          status: 200,
        }
      );
    }

    // Get all records if no ID is provided
    const getAllHash = await prisma.hash.findMany();

    return NextResponse.json(
      {
        message: "All data retrieved successfully",
        data: getAllHash,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Error in getting hash:", error);
    return NextResponse.json(
      {
        message: "Error in retrieving hash",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
};