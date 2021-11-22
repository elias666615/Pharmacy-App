import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { Box, Image, Text, Center, HStack, Stack, NativeBaseProvider, } from "native-base"
import { Rating, AirbnbRating } from 'react-native-elements';
export default function Product() {
    return (
        <NativeBaseProvider>

            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200"
                borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                }}
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
                _light={{
                    backgroundColor: "gray.50",
                }}
            >
                <Box>

                    <Image
                        source={require('../assets/images/product.png')}
                        alt="image"
                    />


                </Box>
                <Stack p="4" space={3}>

                    <Text fontWeight="400">
                        Name
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">

                        <Text color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="400" >
                            Price
                        </Text>
                        <AirbnbRating count={5} readonly={true} defaultRating={0} size={16} />

                    </HStack>
                </Stack>
            </Box>
        </NativeBaseProvider>

    )
}

