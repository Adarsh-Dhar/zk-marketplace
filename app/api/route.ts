import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body only once
    const hash = await req.json();

    // Create the record in the database
    const addHash = await prisma.data.create({
      data: hash
    });

    // Return a success response
    return NextResponse.json({
      message: "Data created successfully",
      data: addHash
    }, {
      status: 200
    });

  } catch (error: any) {
    // Log the error for server-side debugging
    console.error("Error in creating data:", error);

    // Return an error response
    return NextResponse.json({
      message: "Error in creating data",
      error: error.message
    }, {
      status: 500
    });
  }
};

export const GET = async (req: NextRequest) => {
    try {
      // Get all records
      const getAllHash = await prisma.data.findMany();
  
      // Fetch a specific record by ID
      
      const id = req.json
  
      if (id) {
        const getSpecificHash = await prisma.data.findUnique({
          where: {
            id : id // Adjust based on your ID type (string/number)
          }
        });
  
        return NextResponse.json({
          message: "Specific data retrieved successfully",
          data: getSpecificHash
        }, {
          status: 200
        });
      }
  
      // Return all records if no specific ID is provided
      return NextResponse.json({
        message: "All data retrieved successfully",
        data: getAllHash
      }, {
        status: 200
      });
  
    } catch (error: any) {
      console.error("Error in getting hash:", error);
      return NextResponse.json({
        message: "Error in retrieving hash",
        error: error.message
      }, {
        status: 500
      });
    }
  }